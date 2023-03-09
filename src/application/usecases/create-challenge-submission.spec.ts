import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengeRepository } from "../../tests/repositories/in-memory-challenge-repository";
import { InMemoryStudentRepository } from "../../tests/repositories/in-memory-student-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('CreateChallengeSubmission', () => {
  test('Should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentRepository()
    const challengeRepository = new InMemoryChallengeRepository()
    const sut = new CreateChallengeSubmission(studentsRepository, challengeRepository);

    const student = Student.create({
      name: 'Guilherme',
      email: 'email.test@email.com'
    })

    const challenge = Challenge.create({
      title: 'Challenge 01',
      instructionsUrl: 'https://example.com'
    })

    studentsRepository.items.push(student);
    challengeRepository.items.push(challenge)

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id
    })

    expect(response).toBeTruthy()

  })
})
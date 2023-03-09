import { Submission } from "../../domain/entities/submission";
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
}

export class CreateChallengeSubmission {
  constructor(private studentsRepository: StudentsRepository){}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {

    const student = this.studentsRepository.findById(studentId)

    if(!student) {
      throw new Error('Student does not exists.')
    }

    const submission = Submission.create({
      studentId,
      challengeId,
    })

    return submission
  }
}
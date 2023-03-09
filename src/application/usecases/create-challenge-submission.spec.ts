import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('CreateChallengeSubmission', () => {
  test('Should be able to create a new challenge submission', async () => {
    const sut = new CreateChallengeSubmission();
    const response = await sut.execute({
      studentId: 'fake_student_id',
      challengeId: 'fake_challenge_id'
    })

    expect(response).toBeTruthy()

  })
})
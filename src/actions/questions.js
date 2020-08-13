export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_ANSWERED_QUESTIONS = 'RECEIVE_ANSWERED_QUESTIONS'
export const RECEIVE_UNANSWERED_QUESTIONS = 'RECEIVE_UNANSWERED_QUESTIONS'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
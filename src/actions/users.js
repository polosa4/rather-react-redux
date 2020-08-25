export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_QUESTION = 'ADD_QUESTION_TO_USER';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function saveUserQuestion (user, qid) {
  return {
    type: SAVE_USER_QUESTION,
    user,
    qid,
  }
}

export function saveUserAnswer (user, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    user,
    qid,
    answer
  }
}
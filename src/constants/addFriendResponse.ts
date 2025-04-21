export const ADD_FRIEND_RESPONSE_MAP = {
  200: { success: true, message: '님이 친구로 추가되었습니다.' },
  400: { success: false, message: '이미 친구 관계입니다.' },
  401: { success: false, message: '자신을 친구로 추가할 수 없습니다.' },
  404: { success: false, message: '친구를 찾을 수 없습니다.' },
  500: { success: false, message: '친구 추가에 실패했습니다.' },
};

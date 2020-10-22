const avatarDefault = '/images/avatar-default.png'

export default function Users(num) {
  const users = []
  for (let i = 1; i <= num; i++) {
    users.push({
      userInfo: {
        userId: i,
        userName: `User Name ${i}`,
        userAvatar: avatarDefault,
      },
      getUser() {
        return this.userInfo
      }
    })
  }
  return users
}
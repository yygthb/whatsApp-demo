// create state - main user info

const ownerAvatar = '/images/wick.jpg'

export default function loadOwnerInfo () {
  return {
    ownerId: 999,
    ownerName: 'John Wick',
    ownerAvatar,
  }
}
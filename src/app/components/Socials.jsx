import {
  FaSquareXTwitter,
  FaInstagram,
  FaDiscord,
  FaSquareReddit,
  FaFacebookMessenger,
} from 'react-icons/fa6'

const Socials = () => {
  return (
    <ul className='flex gap-2'>
      <li>
        <a href='https://twitter.com/?lang=en'>
          <FaSquareXTwitter className='text-3xl text-white hover:-translate-y-1' />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/'>
          <FaInstagram className='text-3xl bg-gradient-to-br from-blue-700 via-pink-600 to-yellow-600 mix-blend-normal text-white rounded-lg hover:-translate-y-1' />
        </a>
      </li>
      <li>
        <a href='https://discord.com/'>
          <FaDiscord className='text-3xl text-slate-500 hover:-translate-y-1' />
        </a>
      </li>
      <li>
        <a href='https://www.reddit.com/'>
          <FaSquareReddit className='text-3xl text-red-500 hover:-translate-y-1' />
        </a>
      </li>
      <li>
        <a href='https://www.messenger.com/'>
          <FaFacebookMessenger className='text-3xl text-blue-500 hover:-translate-y-1' />
        </a>
      </li>
    </ul>
  )
}

export default Socials

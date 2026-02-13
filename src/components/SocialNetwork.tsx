type SocialNetworkProps = {
  icon: string,
  link: string
}

export default function SocialNetwork({ icon, link } : SocialNetworkProps) {
  return (
      <a className="bg-background-neutral-inverse-primary border border-border-neutral-secondary flex justify-center items-center w-13 h-13 rounded-full" href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="social network logo" className="h-6 w-fit"/>
      </a>
  )
}
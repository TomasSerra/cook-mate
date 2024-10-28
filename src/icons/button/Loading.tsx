import { IconButtonProps } from './IconButton'

function Loading({className = ''}:IconButtonProps) {
  return (
    <>
      <svg className={className} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0647 15.9993C8.90837 15.999 7.77304 15.6903 6.7758 15.1049C5.77857 14.5196 4.95554 13.6788 4.39159 12.6693C3.82765 11.6598 3.54321 10.5182 3.56761 9.36211C3.59201 8.20603 3.92437 7.0774 4.53041 6.0926C5.13644 5.1078 5.99422 4.3025 7.01526 3.75976C8.0363 3.21701 9.18365 2.95647 10.339 3.005C11.4943 3.05353 12.6157 3.40937 13.5877 4.03584C14.5596 4.6623 15.3468 5.5367 15.8681 6.56885C15.9027 6.63258 15.9242 6.70262 15.9313 6.77481C15.9383 6.847 15.9308 6.91987 15.9092 6.9891C15.8875 7.05833 15.8522 7.12251 15.8053 7.17782C15.7584 7.23314 15.7008 7.27847 15.636 7.31113C15.5713 7.34378 15.5006 7.3631 15.4282 7.36793C15.3559 7.37275 15.2833 7.363 15.2147 7.33924C15.1462 7.31548 15.0831 7.27819 15.0293 7.2296C14.9754 7.181 14.9319 7.12209 14.9012 7.05635C14.3523 5.96934 13.453 5.09904 12.3486 4.58592C11.2442 4.0728 9.99912 3.9468 8.81432 4.22825C7.62952 4.50971 6.57412 5.18219 5.81848 6.13717C5.06284 7.09215 4.65105 8.2739 4.64956 9.49167C4.64808 10.7094 5.057 11.8922 5.81031 12.849C6.56363 13.8058 7.61738 14.4809 8.8015 14.7652C9.98561 15.0495 11.231 14.9266 12.3366 14.4161C13.4423 13.9057 14.3436 13.0376 14.8953 11.9519C14.963 11.8284 15.0761 11.7361 15.2107 11.6946C15.3453 11.6532 15.4908 11.6657 15.6163 11.7297C15.7418 11.7937 15.8374 11.904 15.8829 12.0373C15.9284 12.1706 15.9202 12.3164 15.86 12.4438C15.3186 13.5154 14.4899 14.4154 13.4665 15.0433C12.4431 15.6711 11.2653 16.0021 10.0647 15.9993V15.9993Z" fill="currentColor"/>
      </svg>
    </>
  )
}

export default Loading
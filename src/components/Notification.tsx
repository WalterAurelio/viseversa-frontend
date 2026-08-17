import Trash from '../assets/icons/Trash.svg?react';
import Image from '../assets/icons/Image.svg?react';

const actions: {
  comentario: string;
  solicitudIntercambio: string;
  intercambioCompleto: string;
} = {
  comentario: 'te comentó',
  solicitudIntercambio: 'solicita un intercambio',
  intercambioCompleto: 'Intercambio exitoso'
};

export type NotificationProps = {
  username?: string;
  type?: 'comentario' | 'solicitudIntercambio' | 'intercambioCompleto';
  postTitle?: string;
  imgPost?: string;
};

function Notification({
  username = 'John_Doe123',
  imgPost = '',
  type = 'comentario',
  postTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}: NotificationProps) {
  return (
    <div className="flex w-fit items-center justify-center gap-s p-l lg:hover:bg-brand-tertiary">
      {imgPost ? (
        <img src={imgPost} alt={`Imagen de ${postTitle}`} />
      ) : (
        <div className="flex h-7 w-5.5 items-center justify-center bg-neutral-disabled lg:h-8.5 lg:w-7">
          <Image />
        </div>
      )}
      <div className="flex w-60 flex-col gap-xs">
        <div className="flex items-center gap-xs">
          {type === 'intercambioCompleto' ? (
            <p className="label select-none">{actions[type]}</p>
          ) : (
            <p className="body-normal select-none">
              <span className="label">{username}</span> {actions[type]}
            </p>
          )}
        </div>
        <p className="body-normal overflow-hidden text-ellipsis whitespace-nowrap text-neutral-tertiary select-none">
          Publicación: {postTitle}
        </p>
      </div>
      <button name="delete" className="lg:cursor-pointer">
        <Trash />
      </button>
    </div>
  );
}
export default Notification;

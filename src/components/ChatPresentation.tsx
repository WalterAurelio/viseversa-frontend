import Avatar from './Avatar';
import StatusPin from './StatusPin';
import MagnifyingGlass from '../assets/icons/MagnifyingGlass.svg?react';
import CaretLeft from '../assets/icons/CaretLeft.svg?react';
import ArrowLeft from '../assets/icons/ArrowLeft.svg?react';
import { NavLink } from 'react-router';
import { useState } from 'react';
import Input from './Input';

type ChatPresentationProps = {
  username: string;
  img?: string;
  handleSearch: () => void;
} & Omit<React.ComponentProps<typeof StatusPin>, 'className'>;

export default function ChatPresentation({
  username,
  img,
  status,
  handleSearch,
}: ChatPresentationProps) {
  const [openSearch, setOpenSearch] = useState(false);

  const toggleSearch = () => {
    setOpenSearch((prev) => !prev);
    handleSearch();
  };

  return (
    <div className='flex items-center justify-between bg-background-neutral-tertiary py-m pl-s pr-l'>
      {openSearch ? (
        <div className='flex items-center gap-m w-full'>
          <div onClick={() => toggleSearch()} className='cursor-pointer'>
            <ArrowLeft />
          </div>
          <Input placeholder='Buscar...'></Input>
        </div>
      ) : (
        <>
          <div className='flex gap-s items-center'>
            <NavLink className='lg:hidden' to={`/Chats`}>
              <CaretLeft />
            </NavLink>
            <Avatar
              hasUsername={true}
              hasStatusPin={true}
              username={username}
              img={img}
              status={status}
            ></Avatar>
          </div>
          <div onClick={() => toggleSearch()} className='cursor-pointer'>
            <MagnifyingGlass className='text-icon-neutral-primary'/>
          </div>
        </>
      )}
    </div>
  );
}

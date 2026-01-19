import './c styling/header.css';
import {  Search } from 'lucide-react';
import { Bell } from 'lucide-react';

interface DoxaHeaderProps {
  title: string;
}

export default function DoxaHeader({ title }: DoxaHeaderProps) {

return (
    <header className="header">
      
      <h1 className="header-title">{title}</h1>

      <div className="right-section">


        <div className="search-container">
          <Search className='search' size={18}  />
          <input
            type="text"
            placeholder="Search for anything"
            className="search-input"
          />
        </div>

        <button className="icon-button" >
          <Bell className='bell' size={20} />
          <div className='bell' style={{position: 'absolute', width: '8px', height: '8px', backgroundColor: '#ee0505ff', borderRadius: '50%', top: '8px', left: '22px' }} />
        </button>

        
      </div>
    </header>
  );
}
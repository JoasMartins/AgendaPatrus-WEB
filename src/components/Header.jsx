import React from 'react';

function Header() {
    return (
        <header className="header">
            <a href='/' className="header_divIcon">
                <img src='agendapatrus_icon.png' alt='Ícone da Agenda Patrus' />
                <h1>Agenda Patrus</h1>
            </a>
        </header>
    );
}

export default Header;
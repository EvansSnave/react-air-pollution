import React from 'react';
import '../../assets/header.css';

function Header() {
  return (
    <div className="header" data-testid="header-component">
      <div className="header-item middle-header">Europe air pollution</div>
      <div className="header-item last-header-item" />
    </div>
  );
}

export default Header;

import React, { useState, useCallback, useEffect } from 'react';
import { HeaderContainer } from './style';

type HeaderProps = {
    account: string
};

const Header = ({
    account
    }: HeaderProps) => {

        return (
            <HeaderContainer />
        )
};

export default Header;
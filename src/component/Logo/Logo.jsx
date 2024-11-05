import React from 'react'
import Container from '../../assets/Container/Container';
import petromax from '../../assets/img/petromax.png';
import thevron from '../../assets/img/thevron.png';
import barcoo from '../../assets/img/barcoo.png';
import biosool from '../../assets/img/biosool.png';

const Logo = () => {
    return (
        <div>
            <Container>
                <div className=' flex justify-between py-[116px]'>
                    <img src={petromax} alt="" />
                    <img src={thevron} alt="" />
                    <img src={barcoo} alt="" />
                    <img src={biosool} alt="" />
                </div>

            </Container>
        </div>
    )
}

export default Logo

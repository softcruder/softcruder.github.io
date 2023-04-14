import React from 'react';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Button from '@/components/Buttons/Button';

const StyleGuide = () => {
    return (
        <>
            <Navbar isSticky={true} isTransparent={true} />
            <div className="style-guide">
                <span className="big-title">Style Guide</span>
                <div className="style-guide__container">
                    <div className="style-guide__container__card">
                        <Image src="/images/no-file.svg" width={64} height={64} />
                        <br />
                        <p>No Content here yet! <br/> Still compiling style guide.</p>
                    </div>
                    <Button text="Home" href="/" target="_self" />
                </div>
            </div>
            <Footer />
            <style jsx>{`
            span.big-title {
                display: block;
                font-size: 3rem;
                font-weight: 500;
            }
            .style-guide {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-top: 10%;
            }
            .style-guide__container {
                display: flex;
                flex-direction: column;
                margin: 5% 10% 6% 10%;
            }
            .style-guide__container__card {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                justify-content: center;
            }
            `}</style>
        </>
    );
};

export default StyleGuide;
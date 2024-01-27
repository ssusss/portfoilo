import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import 'katex/dist/katex.min.css'; // KaTeX 스타일시트 추가
import { BlockMath, InlineMath } from 'react-katex'; // react-katex에서 제공하는 BlockMath, InlineMath 가져오기

const Clock = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
        script.onload = () => {
            const script2 = document.createElement('script');
            script2.type = 'text/javascript';
            script2.src = 'https://cdn.jsdelivr.net/npm/katex/dist/katex.min.js'; // KaTeX 스크립트 추가
            document.head.appendChild(script2);
        };
        document.head.appendChild(script);
    }, []);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 25);

        // 컴포넌트가 언마운트될 때 clearInterval을 호출하여 메모리 누수를 방지합니다.
        return () => clearInterval(intervalId);
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되게 합니다.

    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const millis = time.getMilliseconds();

    const hourRotation = hour * 30 + minute / 2 + second / 120 + millis / 120000;
    const minuteRotation = minute * 6 + second / 10 + millis / 10000;
    const secondRotation = (millis * 6) / 1000 + second * 6;

    const hourHandStyle = { transform: `rotate(${hourRotation}deg)` };
    const minuteHandStyle = { transform: `rotate(${minuteRotation}deg)` };
    const secondHandStyle = { transform: `rotate(${secondRotation}deg)` };

    function onQuitClick() {
        const clockContainer =document.querySelector('.clockContainer');
        clockContainer.classList.remove('show');
    };

    return (
        <div className="clockWrapper colorPointer2">
            <div className="quitButton" onClick={onQuitClick}><FontAwesomeIcon icon={faX} size='xs'/></div>
            <section className="clock">
                <div className="rectangle1 subcolorPointer2"></div>
                <div className="rectangle2 subcolorPointer2"></div>
                <div className="rectangle3 subcolorPointer2"></div>
                <div className="rectangle4 subcolorPointer2"></div>
                <div className="rectangle5 subcolorPointer2"></div>
                <div className="rectangle6 subcolorPointer2"></div>
                <div className="clockCircle"></div>
                <div className='equations'>
                    <div className="equation1">
                        <InlineMath math={'e^{2\\pi i}'} />
                    </div>
                    <div className="equation2">
                        <InlineMath math={'exp\\left(\\sum\\limits_{n=1}^{\\infty}\\frac{{(-1)^{n+1}}}{n}\\right)'} />
                    </div>
                    <div className="equation3">
                        <InlineMath math={'\\lfloor(\\int_{-\\infty}^{\\infty} e^{-x^2} \\,dx)^2\\rfloor'} />
                    </div>
                    <div className="equation4">
                        <BlockMath math={'|\\mathbb{Z}_8| = \\phi(8)'} />
                    </div>
                    <div className="equation5">
                        <InlineMath math={'\\sec^2(\\tan^{-1}(2))'} />
                    </div>
                    <div className="equation6">
                        <InlineMath math={'\\frac{\\pi}{\\arcsin \\frac{1}{2}}'} />
                    </div>
                    <div className="equation7">
                        <InlineMath math={'\\sqrt{\\text{det}\\left(\\begin{array}{ccc} 0 & 6 & 1 \\\\ 0 & 5 & 2 \\\\ 7 & 4 & 3 \\end{array}\\right)}'} />
                    </div>
                    <div className="equation8">
                        <BlockMath math={'\\left( \\sum\\limits_{n=0}^{\\infty} \\left( \\frac{(-1)^n \\left(\\frac{\\pi}{6}\\right)^{2n+1}}{(2n+1)!} \\right) \\right)^{-3}'} />
                    </div>
                    <div className="equation9">
                        <BlockMath math={'{6 + \\sqrt{6 + \\sqrt{6 + \\ldots}}}'} />
                    </div>
                    <div className="equation10">
                        <div className='equation10_1'>
                            <BlockMath math={'\\dim \\{ A \\in M^{5 \\times 5}(\\mathbb{R}) \\mid'} />
                        </div>
                        <div className='equation10_2'>
                            <BlockMath math={'A + A^t = 0\\}'} />
                        </div>
                    </div>
                    <div className="equation11">
                        <InlineMath math={'\\oint\\limits_{x^2 + y^2 = 11} \\frac{{xdy - ydx}}{{2\\pi}}'} />
                    </div>
                    <div className="equation12">
                        <InlineMath math={'\\sum\\limits_{n=0}^{6} \\int\\limits_{|z|=6} \\frac{\\pi i(z-n)}{dz}'} />
                    </div>
                </div>

                <div className="hourWrapper subcolorPointer2" style={hourHandStyle}>
                    <div className="hourHand subcolorPointer2"></div>
                    <div className='hourCircle subcolorPointer2'></div>
                </div>
                <div className="minuteWrapper colorPointer2" style={minuteHandStyle}>
                    <div className="minuteHand colorPointer2"></div>
                    <div className='minuteCircle colorPointer2'></div>
                </div>
                <div className="secondWrapper" style={secondHandStyle}>
                    <div className="secondHand"></div>
                    <div className='secondCircle'></div>
                </div>
            </section>
        </div>
    );
}

export default Clock;
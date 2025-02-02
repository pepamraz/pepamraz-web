import React, { useState, useEffect, useMemo } from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Loader: React.FC = () => {
    const [isLoading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(.95);
    const quotes = [
        "Kompilace skriptů",
        "Stahování dat",
        "Připojování k serveru",
        "Načítání obsahu",
        "Překládání kódu",
        "Vykreslování obrázků",
        "Zpracování dat",
        "Načítání stylů",
        "Načítání skriptů",
        "Načítání obrázků",
        "Načítání stránky",
    ];
    const getRandomQuotes = (num) => {
        const shuffled = quotes.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };
    const selectedQuotes = useMemo(() => getRandomQuotes(4), []);
    const [currentQuote, setCurrentQuote] = useState(selectedQuotes[0]);

    const [dots, setDots] = useState(".");
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(dots => dots.length < 3 ? dots + "." : "");
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let progressInterval;

        const handlePageLoad = () => {
            setPercentage(100);
            setTimeout(() => {
                setOpacity(0);
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }, 500);
            clearInterval(progressInterval);
        };

        progressInterval = setInterval(() => {
            setPercentage(prev => (prev < 75 ? prev + 1 : prev));
        }, 100);

        if (document.readyState === "complete") {
            handlePageLoad();
        } else {
            window.addEventListener("load", handlePageLoad);
        }

        return () => {
            window.removeEventListener("load", handlePageLoad);
            clearInterval(progressInterval);
        };
    }, []);

    useEffect(() => {
        const index = Math.min(Math.floor(percentage / 25), 3);
        setCurrentQuote(selectedQuotes[index]);
    }, [percentage]);

    if (!isLoading) {
        return null;
    }

    return (
        <div
            className='opacity-80 fixed inset-0 bg-white flex justify-center items-center z-50 transition-opacity duration-500'
            style={{ opacity }}
        >
            <div className='grid place-items-center gap-1'>
                <div>
                    <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
                        pathColor: '#525fe1',
                        pathTransitionDuration: 1,
                    })}>
                        <div className='w-3/4'>
                            <img src="pepa-mraz-cz-bro-frajer-borec.webp" alt="loading" className='pulsing mt-5 ml-2' />
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <h2 className='text-primary text-center font-bold mt-4'>{currentQuote}{dots}</h2>
            </div>
        </div>
    );
}

export default Loader
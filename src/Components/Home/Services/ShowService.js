import React from 'react';
import { useSpring, animated } from 'react-spring'
import { useHistory } from 'react-router-dom';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


const ShowService = ({ service }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const { title, price, img, _id } = service;

    const history = useHistory();

    const handleBooking = () => {
        history.push(`/admin/${_id}`);
    };

    return (
        <div className="col">
            <animated.div
                className="service-card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <div onClick={handleBooking} className="card h-100 p-4 text-center shadow-sm border-less">
                    <div className="card-header border-less" style={{ background: 'none' }}>
                        <img src={img} alt="" className='rounded' style={{ height: '120px', width: '150px' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-brand">{title}</h5>
                        <h6 className="card-text text-secondary">$ {price}</h6>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

export default ShowService;
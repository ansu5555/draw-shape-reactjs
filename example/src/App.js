import React from 'react';
import {
    SteppedLine,
    Line,
    PolyLine,
    Circle,
    Rectangle
} from 'draw-shape-reactjs';
import './App.css';

function App() {
    return (
        <div className="App">
            <div
                style={{
                    left: '700px',
                    height: '100vh',
                    width: '50vw',
                    position: 'relative'
                }}>
                <button
                    style={{
                        marginTop: '160px'
                    }}
                    onClick={() => alert('Button clicked')}>
                    click
                </button>
                <Line
                    position="fixed"
                    from={[110, 610]}
                    to={[600, 850]}
                    color="#1DBFE7"
                />
                <SteppedLine
                    from={[0, 300]}
                    to={[900, 650]}
                    zIndex={2}
                    color="#9c27b0"
                />
                <PolyLine
                    position="fixed"
                    points={[[45, 60], [36, 120], [400, 500], [45, 60]]}
                    color="#ff8f00"
                />
                <Circle center={[800, 200]} radius={100} color="#00701a" />
                <Rectangle
                    position="fixed"
                    corner={[850, 100]}
                    height={150}
                    width={500}
                    color="#FF0266"
                />
            </div>
        </div>
    );
}

export default App;

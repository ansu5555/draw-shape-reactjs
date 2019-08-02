import React, { Component } from 'react';

let baseStyle = {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#000000'
};

function drawLine(from, to, lineWeight, componentStyle) {
    const m = (to[1] - from[1]) / (to[0] - from[0]);
    let line = [];

    if (from[0] < to[0]) {
        for (let x = from[0]; x <= to[0]; x += 0.1) {
            let y = m * (x - to[0]) + to[1];
            const pixel = {
                ...componentStyle,
                left: `${x}px`,
                top: `${y}px`,
                width: `${lineWeight}px`,
                height: `${lineWeight}px`
            };
            line.push(<div style={pixel} />);
        }
    } else if (from[0] > to[0]) {
        for (let x = from[0]; x >= to[0]; x -= 0.1) {
            let y = m * (x - to[0]) + to[1];
            const pixel = {
                ...componentStyle,
                left: `${x}px`,
                top: `${y}px`,
                width: `${lineWeight}px`,
                height: `${lineWeight}px`
            };
            line.push(<div style={pixel} />);
        }
    } else {
        if (from[1] < to[1]) {
            for (let y = from[1]; y <= to[1]; y += 0.1) {
                let x = from[0];
                const pixel = {
                    ...componentStyle,
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${lineWeight}px`,
                    height: `${lineWeight}px`
                };
                line.push(<div style={pixel} />);
            }
        } else if (from[1] > to[1]) {
            for (let y = from[1]; y >= to[1]; y -= 0.1) {
                let x = from[0];
                const pixel = {
                    ...componentStyle,
                    left: `${x}px`,
                    top: `${y}px`,
                    width: `${lineWeight}px`,
                    height: `${lineWeight}px`
                };
                line.push(<div style={pixel} />);
            }
        } else {
            let x = from[0];
            let y = from[1];
            const pixel = {
                ...componentStyle,
                left: `${x}px`,
                top: `${y}px`,
                width: `${lineWeight}px`,
                height: `${lineWeight}px`
            };
            line.push(<div style={pixel} />);
        }
    }

    return line;
}

class Line extends Component {
    render() {
        let componentStyle = { ...baseStyle };

        if (this.props.position === 'fixed') {
            componentStyle.position = this.props.position;
        }

        let from;
        this.props.from ? (from = this.props.from) : (from = [0, 0]);

        let to;
        this.props.to ? (to = this.props.to) : (to = [0, 0]);

        let lineWeight;
        this.props.lineWeight
            ? (lineWeight = this.props.lineWeight)
            : (lineWeight = 3);

        if (this.props.color) {
            componentStyle.backgroundColor = this.props.color;
        }

        if (this.props.zIndex) {
            componentStyle.zIndex = this.props.zIndex;
        }

        let line = drawLine(from, to, lineWeight, componentStyle);

        return <div>{line}</div>;
    }
}

class SteppedLine extends Component {
    render() {
        let componentStyle = { ...baseStyle };

        if (this.props.position === 'fixed') {
            componentStyle.position = this.props.position;
        }

        let from;
        this.props.from ? (from = this.props.from) : (from = [0, 0]);

        let to;
        this.props.to ? (to = this.props.to) : (to = [0, 0]);

        let lineWeight;
        this.props.lineWeight
            ? (lineWeight = this.props.lineWeight)
            : (lineWeight = 3);

        if (this.props.color) {
            componentStyle.backgroundColor = this.props.color;
        }

        if (this.props.zIndex) {
            componentStyle.zIndex = this.props.zIndex;
        }

        let [x1, y1] = from;
        let [x2, y2] = to;

        let midx = x1 + (x2 - x1) / 2;

        const line1 = {
            ...componentStyle,
            left: `${midx >= x1 ? x1 : midx}px`,
            top: `${y1}px`,
            width: `${Math.abs((x2 - x1) / 2)}px`,
            height: `${lineWeight}px`
        };

        const line2 = {
            ...componentStyle,
            left: `${midx}px`,
            top: `${y2 >= y1 ? y1 : y2}px`,
            width: `${lineWeight}px`,
            height: `${y2 - y1 === 0 ? 0 : Math.abs(y2 - y1) + lineWeight}px`
        };

        const line3 = {
            ...componentStyle,
            left: `${x2 >= midx ? midx : x2}px`,
            top: `${y2}px`,
            width: `${Math.abs((x2 - x1) / 2)}px`,
            height: `${lineWeight}px`
        };

        return (
            <>
                <div style={line1} />
                <div style={line2} />
                <div style={line3} />
            </>
        );
    }
}

class PolyLine extends Component {
    render() {
        let componentStyle = { ...baseStyle };

        if (this.props.position === 'fixed') {
            componentStyle.position = this.props.position;
        }

        let lines = [];
        let points;

        if (this.props.points) {
            let from = this.props.points.slice(0, -1);
            let to = this.props.points.slice(1);

            points = from.map((_, i) => [from[i], to[i]]);
        } else {
            points = [[0, 0], [0, 0]];
        }

        let lineWeight;
        this.props.lineWeight
            ? (lineWeight = this.props.lineWeight)
            : (lineWeight = 3);

        if (this.props.color) {
            componentStyle.backgroundColor = this.props.color;
        }

        if (this.props.zIndex) {
            componentStyle.zIndex = this.props.zIndex;
        }

        for (let [from, to] of points) {
            lines.push(...drawLine(from, to, lineWeight, componentStyle));
        }

        return <div>{lines}</div>;
    }
}

class Circle extends Component {
    render() {
        let componentStyle = { ...baseStyle };

        if (this.props.position === 'fixed') {
            componentStyle.position = this.props.position;
        }

        let circle = [];

        let center;
        this.props.center ? (center = this.props.center) : (center = [0, 0]);

        let radius;
        this.props.radius ? (radius = this.props.radius) : (radius = 1);

        let lineWeight;
        this.props.lineWeight
            ? (lineWeight = this.props.lineWeight)
            : (lineWeight = 3);

        if (this.props.color) {
            componentStyle.backgroundColor = this.props.color;
        }

        if (this.props.zIndex) {
            componentStyle.zIndex = this.props.zIndex;
        }

        for (let x = center[0] - radius; x <= center[0] + radius; x += 0.01) {
            let yb =
                center[1] +
                Math.sqrt(Math.pow(radius, 2) - Math.pow(x - center[0], 2));
            let yt =
                center[1] -
                Math.sqrt(Math.pow(radius, 2) - Math.pow(x - center[0], 2));

            const pixelB = {
                ...componentStyle,
                left: `${x}px`,
                top: `${yb}px`,
                width: `${lineWeight}px`,
                height: `${lineWeight}px`
            };
            const pixelT = {
                ...componentStyle,
                left: `${x}px`,
                top: `${yt}px`,
                width: `${lineWeight}px`,
                height: `${lineWeight}px`
            };
            circle.push(<div style={pixelB} />);
            circle.push(<div style={pixelT} />);
        }
        return <div>{circle}</div>;
    }
}

class Rectangle extends Component {
    render() {
        let componentStyle = { ...baseStyle };

        if (this.props.position === 'fixed') {
            componentStyle.position = this.props.position;
        }

        let rectangle = [];

        let corner;
        this.props.corner ? (corner = this.props.corner) : (corner = [0, 0]);

        let height;
        this.props.height ? (height = this.props.height) : (height = 1);

        let width;
        this.props.width ? (width = this.props.width) : (width = 1);

        let lineWeight;
        this.props.lineWeight
            ? (lineWeight = this.props.lineWeight)
            : (lineWeight = 3);

        if (this.props.color) {
            componentStyle.backgroundColor = this.props.color;
        }

        if (this.props.zIndex) {
            componentStyle.zIndex = this.props.zIndex;
        }

        let corners = [
            [corner[0], corner[1]],
            [corner[0] + width, corner[1]],
            [corner[0] + width, corner[1] + height],
            [corner[0], corner[1] + height],
            [corner[0], corner[1]]
        ];

        let from = corners.slice(0, -1);
        let to = corners.slice(1);

        const points = from.map((_, i) => [from[i], to[i]]);

        for (let [from, to] of points) {
            rectangle.push(...drawLine(from, to, lineWeight, componentStyle));
        }

        return <div>{rectangle}</div>;
    }
}

export { Line, SteppedLine, PolyLine, Circle, Rectangle };

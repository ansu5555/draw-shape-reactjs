# draw-shape-reactjs

Simple react component to draw shapes like

-   Line
-   SteppedLine
-   PolyLine
-   Circle
-   Rectangle
-   Free form shape with lines

### Example: Live demo is available [here](https://ansu5555.github.io/draw-shape-reactjs/)

# How to install

```
npm install draw-shape-reactjs
```

# How to use

```js
import React from 'react';
import {
    Line,
    SteppedLine,
    PolyLine,
    Circle,
    Rectangle
} from 'draw-shape-reactjs';

function App() {
    return (
        <div className='App'>
            <div
                style={{
                    left: '500px',
                    height: '100vh',
                    width: '50vw',
                    position: 'relative'
                }}>
                <Line
                    position='fixed'
                    from={[110, 610]}
                    to={[600, 850]}
                    color='#1DBFE7'
                />
                <SteppedLine
                    from={[0, 300]}
                    to={[900, 650]}
                    zIndex={2}
                    color='#9c27b0'
                />
                <PolyLine
                    position='fixed'
                    points={[[45, 60], [36, 120], [400, 500], [45, 60]]}
                    color='#ff8f00'
                />
                <Circle center={[800, 200]} radius={100} color='#00701a' />
                <Rectangle
                    corner={[430, 160]}
                    height={50}
                    width={100}
                    color='#FF0266'
                />
            </div>
        </div>
    );
}

export default App;
```

# Documentation

## React components

### `Line`

React component prop. types:

-   `from`:

    -   **Type**: array
    -   **Required**: true
    -   **Description**: Start point of the line [x, y]. x, y is calulated from top-left corner

-   `to`:

    -   **Type**: array
    -   **Required**: true
    -   **Description**: End point of the line [x, y]. x, y is calulated from top-left corner

-   `lineWeight`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: Width of the shape, default value is 3

-   `color`:

    -   **Type**: string
    -   **Required**: false
    -   **Description**: Color of the shape, default value is '#000000'

-   `zIndex`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: zindex of the shape, default value is 10

-   `position`:
    -   **Type**: string
    -   **Required**: false
    -   **Description**: Position type for the shape. It can be either 'absolute' of 'fixed', default value is 'absolute'

### `SteppedLine`

React component prop. types:

-   `from`:

    -   **Type**: array
    -   **Required**: true
    -   **Description**: Start point of the line [x, y]. x, y is calulated from top-left corner

-   `to`:

    -   **Type**: array
    -   **Required**: true
    -   **Description**: End point of the line [x, y]. x, y is calulated from top-left corner

-   `lineWeight`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: Width of the shape, default value is 3

-   `color`:

    -   **Type**: string
    -   **Required**: false
    -   **Description**: Color of the shape, default value is '#000000'

-   `zIndex`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: zindex of the shape, default value is 10

-   `position`:
    -   **Type**: string
    -   **Required**: false
    -   **Description**: Position type for the shape. It can be either 'absolute' of 'fixed', default value is 'absolute'

### `PolyLine`

React component prop. types:

-   `points`:

    -   **Type**: array
    -   **Required**: true
    -   **Description**: All the points of the line, it should be an array of arrays like [[x1, y1], [x2, y2], [x3, y3]]

-   `lineWeight`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: Width of the shape, default value is 3

-   `color`:

    -   **Type**: string
    -   **Required**: false
    -   **Description**: Color of the shape, default value is '#000000'

-   `zIndex`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: zindex of the shape, default value is 10

-   `position`:
    -   **Type**: string
    -   **Required**: false
    -   **Description**: Position type for the shape. It can be either 'absolute' of 'fixed', default value is 'absolute'

### `Circle`

React component prop. types:

-   `center`:

    -   **Type**: array
    -   **Required**: true
    -   **Description**: Center of the circle [x, y]. x, y is calulated from top-left corner.

-   `radius`:

    -   **Type**: number
    -   **Required**: true
    -   **Description**: Radius of the circle

-   `lineWeight`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: Width of the shape, default value is 3

-   `color`:

    -   **Type**: string
    -   **Required**: false
    -   **Description**: Color of the shape, default value is '#000000'

-   `zIndex`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: zindex of the shape, default value is 10

-   `position`:
    -   **Type**: string
    -   **Required**: false
    -   **Description**: Position type for the shape. It can be either 'absolute' of 'fixed', default value is 'absolute'

### `Rectangle`

React component prop. types:

-   `corner`:

    -   **Type**: array
    -   **Required**: true
    -   **Description**: Top-Left corner [x, y] of the rectangle. x, y is calulated from top-left corner.

-   `height`:

    -   **Type**: number
    -   **Required**: true
    -   **Description**: Height of the rectangle

-   `width`:

    -   **Type**: number
    -   **Required**: true
    -   **Description**: Width of the rectangle

-   `lineWeight`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: Width of the shape, default value is 3

-   `color`:

    -   **Type**: string
    -   **Required**: false
    -   **Description**: Color of the shape, default value is '#000000'

-   `zIndex`:

    -   **Type**: number
    -   **Required**: false
    -   **Description**: zindex of the shape, default value is 10

-   `position`:
    -   **Type**: string
    -   **Required**: false
    -   **Description**: Position type for the shape. It can be either 'absolute' of 'fixed', default value is 'absolute'

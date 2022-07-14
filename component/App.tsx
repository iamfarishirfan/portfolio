import React, { useEffect, useState } from 'react';

export default function App(): JSX.Element {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return <div id="ui-app">{!loading && <p>Hello, World</p>}</div>;
}

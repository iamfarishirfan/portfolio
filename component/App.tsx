import React, { useEffect, useState } from 'react';

import LoadingScreen from './LoadingScreen';
import HelpPrompt from './HelpPrompt';

export default function App(): JSX.Element {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div id="ui-app">
            {!loading && <HelpPrompt />}
            <LoadingScreen />
        </div>
    );
}

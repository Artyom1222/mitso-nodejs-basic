const parseEnv = () => {
    const prefix = 'MITSO_';
    const entries = Object.entries(process.env)
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value]) => `${key}=${value}`);

    console.log(entries.join('; '));
};

parseEnv();

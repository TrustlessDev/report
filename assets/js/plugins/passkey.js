async function registerPasskey() {
    const response = await fetch('https://api.okx.report/auth/register-options', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'ksbcboy' }),
    });
    const options = await response.json();

    // 確保 challenge 被轉換為 Uint8Array 格式
    options.challenge = Uint8Array.from(atob(options.challenge), c => c.charCodeAt(0));
    options.user.id = Uint8Array.from(atob(options.user.id), c => c.charCodeAt(0));

    // 執行 WebAuthn 註冊
    const credential = await navigator.credentials.create({
        username: 'ksbcboy',
        publicKey: options,
    });

    // 將結果發送到後端
    await fetch('https://api.okx.report/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credential),
    });

    alert('通行密鑰註冊成功！');
}
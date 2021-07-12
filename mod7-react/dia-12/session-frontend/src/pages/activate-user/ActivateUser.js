import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

function ActivateUser() {
    const query = new URLSearchParams(useLocation().search);
    let history = useHistory();

    const activationCode = query.get('activationCode');

    console.log(activationCode);
    useEffect(() => {
        async function performActivateUser() {
            const response = await fetch(
                'http://localhost/api/auth/users/activate',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        activationCode,
                    }),
                }
            );
            await response.json();

            history.push('/login');
        }
        console.log('Llamamos al backend con el activation code');
        performActivateUser();
    }, [activationCode, history]);

    return <div>Activando usuario...</div>;
}

export default ActivateUser;

import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/FirebaseConfig';
const Auth = ({ setToken }) => {
  const [isChecked, setIsChecked] = useState(false);
  const signIn = () => {
    // PENCERE KULLANICI GİRİŞİ
    signInWithPopup(auth, provider)
      .then((res) => {
        isChecked
          ? localStorage.setItem('token', res.user.refreshToken)
          : sessionStorage.setItem('token', res.user.refreshToken);
        setToken(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth">
      <h1>Chat Odası</h1>
      <p>Devam etmek için giriş yapın</p>
      <div className="hatirlaBox">
        <input type="checkbox" id="hatirla" />
        <label
          htmlFor="hatirla"
          onChange={(e) => setIsChecked(e.target.checked)}
        >
          Beni Hatırla
        </label>
      </div>

      <button onClick={signIn}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />{' '}
        Google ile giriş yap
      </button>
    </div>
  );
};

export default Auth;
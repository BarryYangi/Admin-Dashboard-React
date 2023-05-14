import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [showAlert])

  const alert = () => {
    return (<div className="alert alert-error fixed top-2 w-1/3 shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>登录失败，请检查您的用户名和密码是否正确。</span>
      </div>
    </div>)
  }

  const handleLogin = () => {
    if (email === '1' && password === '1')
      navigate('/home')

    else
      setShowAlert(true)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-6">
      {showAlert && alert()}
      <div className="hero bg-base-200 w-2/3 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              一款使用 Vite + TypeScript + Tailwind CSS + Daisy UI + lucide-react + react-router 构建的后台管理前端页面，输入测试账号登录体验。
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">邮箱</span>
                </label>
                <input type="text" placeholder="admin@yct.ee" className="input input-bordered" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">密码</span>
                </label>
                <input type="password" placeholder="admin" className="input input-bordered" value={password} onChange={e => setPassword(e.target.value)} />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    忘记密码?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleLogin}>
                  登录
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

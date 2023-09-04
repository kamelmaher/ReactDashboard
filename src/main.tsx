import ReactDOM from 'react-dom/client'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { store } from './store/store.ts'
import { Provider   } from 'react-redux'
import Layout from './components/Layout.tsx'
import App from './App.tsx'
import AccountSetting from './components/Account/AccountSetting.tsx'
import Account from './components/Account/Account.tsx'
import SignUp from './components/SignUp.tsx'
import Security from './components/Account/Security.tsx'
import Login from './components/Login.tsx'
import Info from './components/Account/Info.tsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index path='/' element={<App />}></Route>
      <Route path='/account-setting/' element={<AccountSetting />}>
        <Route index path='/account-setting/account' element={<Account />}></Route>
        <Route path='security' element={<Security />}></Route>
        <Route path='info' element={<Info />}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='*' element={<App />}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
)

import React from 'react'
import ContextTest from './AxiosTest/ContextTest'
import { Responsive } from './CSS_Problem/Responsive'
import MyCustomeHook from './customHook/MyCustomeHook'
import ComA from './PropsDrilling/ComA'
import IncDec from './ReduxTest/components/IncDec'
import CounterReducer from './useReducer/CounterReducer'
// import ComA from './contextAPI/useContext/ComA'
import BulbTest from './useState/BulbTest'
import Counter from './useState/Counter'
import MultipleField from './useState/MultipleField'
import Tagging from './useState/Practice/Tagging'
import WithObject from './useState/WithObject'
import ClassA from './components/classCpmponent/ClassA'
import ClassState from './PureComponent/ClassState'
import ClassProps from './PureComponent/ClassProps'
import MemoTest from './useMemo/MemoTest'
import ClassRef from './Ref_Class/ClassRef'
import UseRefTest from './useRef/UseRefTest'
import UserRefDOM from './useRef/UseRefDOM'
import ForwardRef from './useRef/ForwardRef'
import ControlledComp from './components/controll_and_uncontrolled/ControlledComp'
import UncontrolledComp from './components/controll_and_uncontrolled/UncontrolledComp'
import Practice from './components/controll_and_uncontrolled/Practice'
import MainCom from './HOC/Function/MainCom'
import ClassPractice, { CountShouldComponent, ParentUnmount, UserMount, UserPractice, UserRender, UserUpdate } from './components/classCpmponent/ClassPractice'
import FunLifeCycle from './components/funcComponent/FunLifeCycle'
import CountEffect from './useEffect/CountEffect'
import CountWithState from './useEffect/CountWithState'
import CountWithProps from './useEffect/CountWithProps'
import MainCSS from './CSS_Problem/type/MainCSS'
import ArrayData from './Basic/ArrayData'
import ArrayWithObject from './Basic/ArrayWithObject'
import ReusableComponent from './Basic/ReusableComponent'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Router/components/Home'
import About from './Router/components/About'
import Contact from './Router/components/Contact'
import Header from './Router/Header'
import PageNotFound from './Router/components/PageNotFound'
import UserForm from './Practice/UserForm'
import RadioTest from './MultiLang/RadioTest'
import Heading1 from './MultiLang/components/Heading1'
import Heading2 from './MultiLang/components/Heading2'

const App = () => {
    return (
        // <ComA />
        <>
            {/* START Array Listing */}
            {/* <ArrayData /> */}
            {/* <ArrayWithObject /> */}
            {/* <ReusableComponent /> */}
            {/* CSS Array Listing */}

            {/* ===== START CSS ===== */}
            {/* <Responsive /> */}
            {/* Type of css */}
            {/* <MainCSS /> */}
            {/* ===== END CSS ===== */}

            {/* ===== START useState() ===== */}
            {/* <BulbTest /> */}
            {/* <Counter /> */}
            {/* <MultipleField /> */}
            {/* <WithObject />  */}

            {/* === START Practice === */}
            {/* <Tagging /> */}
            {/* === END Practice === */}
            {/* ===== END useState() ===== */}

            {/* ===== START useCustomeHook() ===== */}
            {/* <MyCustomeHook /> */}
            {/* ===== END useCustomeHook() ===== */}

            {/* ===== START useReducer() ===== */}
            {/* <CounterReducer /> */}
            {/* ===== END useReducer() ===== */}

            {/* ===== START useContext() ===== */}
            {/* <ComA /> */}
            {/* ===== END useContext() ===== */}


            {/* ===== START Redux ===== */}
            {/* <IncDec /> */}
            {/* ===== END Redux ===== */}

            {/* ===== START useMemo() ===== */}
            {/* <MemoTest /> */}
            {/* ===== END useMemo() ===== */}

            {/* ===== START useRef() ===== */}
            {/* <UseRefTest />
         <UserRefDOM />
         <ForwardRef /> */}
            {/* ===== END useRef() ===== */}

            {/* ===== START Ref(  createRef()  ) ===== */}
            {/* <ClassRef /> */}
            {/* ===== END Ref(  createRef()  ) ===== */}

            {/* ===== START PropDrilling ===== */}
            {/* <ComA /> */}
            {/* ===== END PropDrilling ===== */}

            {/* ==== START Life cycle method ===== */}
            {/* Class Component */}
            {/* <ClassA />  */}
            {/* <ClassPractice /> */}
            {/* <UserPractice /> */}
            {/* <UserRender /> */}
            {/* <UserMount /> */}
            {/* <UserUpdate /> */}
            {/* <CountShouldComponent /> */}
            {/* <ParentUnmount /> */}

            {/* Function component */}
            {/* <FunLifeCycle /> */}
            {/* <CountEffect /> */}
            {/* <CountWithState /> */}
            {/* <CountWithProps /> */}
            {/* ==== END Life cycle method ===== */}

            {/* ===== START Controlled & Uncontrolled Component ===== */}
            {/* <ControlledComp />
         <UncontrolledComp /> */}
            {/* <Practice /> */}
            {/* ===== END Controlled & Uncontrolled Component ===== */}

            {/* ===== START HOC ===== */}
            {/* <MainCom /> */}
            {/* ===== END HOC ===== */}

            {/* ===== START Pure component with State & Props ===== */}
            {/* <ClassState />
          <ClassProps /> */}
            {/* ===== END Pure component with State & Props ===== */}


            {/* ===== START Axios ===== */}
            {/* <ContextTest /> */}
            {/* ===== END Axios ===== */}

            {/* ===== START Router ===== */}
            {/* <BrowserRouter>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/service' element={<Navigate to='/'/>}/>
                    <Route path='/*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter> */}
            {/* ===== END Router ===== */}

            {/* ===== START Practice ===== */}
            {/* <UserForm /> */}
            <Heading1 />
            <Heading2 />
            <RadioTest />
            {/* ===== END Practice ===== */}

        </>
    )
}

export default App
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1612],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7620:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const o={},l="Auth y useSWR",s={unversionedId:"laravel/laravel-react/Notes/auth-useSwr",id:"laravel/laravel-react/Notes/auth-useSwr",title:"Auth y useSWR",description:"Cuando se obtiene el token de laravel en el front se puede utilizar useSWR para revalidar los datos.",source:"@site/docs/laravel/3-laravel-react/Notes/19-auth-useSwr.md",sourceDirName:"laravel/3-laravel-react/Notes",slug:"/laravel/laravel-react/Notes/auth-useSwr",permalink:"/docs/laravel/laravel-react/Notes/auth-useSwr",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/laravel/3-laravel-react/Notes/19-auth-useSwr.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CORS",permalink:"/docs/laravel/laravel-react/Notes/CORS"},next:{title:"PicNote API",permalink:"/docs/laravel/picnote/Notes/"}},u={},i=[{value:"useAuth",id:"useauth",level:2},{value:"Proteger ruta",id:"proteger-ruta",level:2},{value:"Remover token",id:"remover-token",level:2}],c={toc:i},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"auth-y-useswr"},"Auth y useSWR"),(0,a.kt)("p",null,"Cuando se obtiene el token de laravel en el front se puede utilizar useSWR para revalidar los datos."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hay ventajas de implementar SWR, si el token expira se cerrar\xe1 la sesi\xf3n, se identificar\xe1 que usuario inicia sesi\xf3n.\n")),(0,a.kt)("h2",{id:"useauth"},"useAuth"),(0,a.kt)("p",null,"Se integra SWR al hook personalizado de useAuth"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import useSWR from 'swr';\n\nimport clienteAxios from \"../config/axios\"\n\nexport const useAuth = ({middleware,url}) => {\n\n    const token = localStorage.getItem('AUTH_TOKEN')\n\n    const {data: user,error,mutate} = useSWR('/api/user', ()=>\n        clienteAxios('/api/user',{\n            headers: {\n                Authorization: `Bearer ${token}`\n            }\n        })\n        .then(res => res.data)\n        .catch(error => {\n            throw Error(error?.response?.data?.errors)\n        })\n    )\n\n    const login = async (datos,setErrores) => { \n        try {\n            const response = await clienteAxios.post('/api/login',datos);\n            localStorage.setItem('AUTH_TOKEN',response.data.token);\n            setErrores([])\n            await mutate() //Forzar revalidacion useSWR\n\n            ...\n        \n    useEffect(() => { \n        if(middleware === 'guest' && url && user){\n            navigate(url)\n        }\n    },[user,error]\n")),(0,a.kt)("h2",{id:"proteger-ruta"},"Proteger ruta"),(0,a.kt)("p",null,"Se agrega al useEffect de useAuth:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"\n    useEffect(() => { \n        if(middleware === 'guest' && url && user){\n            navigate(url)\n        }\n\n        if(middleware === 'auth' && error){\n            navigate('/auth/login')\n        }\n    },[user,error])\n\n")),(0,a.kt)("p",null,"Desde el layout que se ocupa para las rutas con autenticacion requerida:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function Layout() {\n  \n  const {modal,handleClickModal} = useAppContext();\n  \n  const {user,error} = useAuth({\n    middleware: 'auth'\n  })\n\n")),(0,a.kt)("h2",{id:"remover-token"},"Remover token"),(0,a.kt)("p",null,"Desde useAuth:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"\n    const logout =  async () => { \n        try {\n            await clienteAxios.post('/api/logout', null, {\n                headers: {\n                    Authorization: `Bearer ${token}`\n                }\n            })\n\n            localStorage.removeItem('AUTH_TOKEN');\n            await mutate(undefined)\n        } catch (error) {\n            throw Error(error?.response?.data?.errors)\n        }\n    }\n")),(0,a.kt)("p",null,"Desde el componente que lo importa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"    const { logout } = useAuth({\n        middleware: 'auth'\n    })\n")),(0,a.kt)("p",null,"Desde laravel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"    public function logout(Request $request){\n        $user = $request->user();\n\n        $user->currentAccessToken()->delete();\n\n        return [\n            'user' => null\n        ];\n    }\n")))}d.isMDXComponent=!0}}]);
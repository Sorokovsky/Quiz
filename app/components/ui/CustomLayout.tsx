'use client'
import { store } from "@store/store"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux"
interface Props extends PropsWithChildren {
}

const CustomLayout = ({children}: Props): JSX.Element => {
    return (
    <Provider store={store}>
    <html lang="en">
      <body>{children}</body>
    </html>
    </Provider>
    )
};

export default CustomLayout;
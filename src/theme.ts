import { PaletteMode, ThemeOptions } from "@mui/material"

declare module '@mui/material/styles'{
  interface TypeBackground{
    alt: string
  }
}

const colorTokens = {
    primary: {
        100: "#ccf2da",
        200: "#99e4b6",
        300: "#66d791",
        400: "#33c96d",
        500: "#00bc48",
        600: "#00963a",
        700: "#00712b",
        800: "#004b1d",
        900: "#00260e"
    },
    black: {
        100: "#d0d0d5",
        200: "#a2a2ab",
        300: "#737380",
        400: "#454556",
        500: "#16162c",
        600: "#121223",
        700: "#0d0d1a",
        800: "#090912",
        900: "#040409"
    },
    white: {
        100: "#fcfcfc",
        200: "#f9faf9",
        300: "#f7f7f7",
        400: "#f4f5f4",
        500: "#f1f2f1",
        600: "#c1c2c1",
        700: "#919191",
        800: "#606160",
        900: "#303030"
    },
}

export const themeSettings = (mode: PaletteMode): ThemeOptions => {
    return {
        palette: {
            mode: mode,
            //palette for dark mode
            ...(mode === 'dark' ? {
                primary:{
                    main: colorTokens.primary[500],
                    contrastText: colorTokens.white[100]
                
                },
                background: {
                    default: colorTokens.black[500],
                    alt: colorTokens.black[400]
                }
            }: 
            //palette for light mode
            {
                primary: {
                    main: colorTokens.primary[500],
                    contrastText: colorTokens.white[100]
                },
                background:{
                    default: colorTokens.white[100],
                    alt: colorTokens.white[500]
                }

            })
        },
        typography: {
            fontFamily: ["Aeonik", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
              fontFamily: ["Aeonik", "sans-serif"].join(","),
              fontSize: 40,
            },
            h2: {
              fontFamily: ["Aeonik", "sans-serif"].join(","),
              fontSize: 32,
            },
            h3: {
              fontFamily: ["Aeonik", "sans-serif"].join(","),
              fontSize: 24,
            },
            h4: {
              fontFamily: ["Aeonik", "sans-serif"].join(","),
              fontSize: 20,
            },
            h5: {
              fontFamily: ["Aeonik", "sans-serif"].join(","),
              fontSize: 16,
            },
            h6: {
              fontFamily: ["Aeonik", "sans-serif"].join(","),
              fontSize: 14,
            },
          },
    }
}
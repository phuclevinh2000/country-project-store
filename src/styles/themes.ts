export interface ThemeProps {
  background: string;
  text: string;
  color: string
}

export const darkTheme: ThemeProps = {
  background: 'var(--dark-background)',
  text: 'var(--dark-text)',
  color: 'white'
};

export const lightTheme: ThemeProps = {
  background: 'var(--light-background)',
  text: 'var(--light-text)',
  color: 'black'
};
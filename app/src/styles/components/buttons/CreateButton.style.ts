import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const styles = {
  button: css`
    border-radius: 5px;
    height: 43px;
    width: 300px;
    font-size: 18px;
    border: solid 2px ${color.white};
    color: ${color.white};
    background-color: ${color.red};
    margin-bottom: 15px;
  `,

  wrapper: css`
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0 5px;
  `,
}

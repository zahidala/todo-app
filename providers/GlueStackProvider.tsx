import { config } from '@gluestack-ui/config'
import { createProvider } from '@gluestack-ui/provider'
import { OverlayProvider } from '@gluestack-ui/overlay'
import { StyledProvider } from '@gluestack-style/react'
import { ToastProvider } from '@gluestack-ui/toast'

const GluestackUIStyledProvider = createProvider({ StyledProvider })

const GluestackProvider = ({ children }: React.PropsWithChildren) => {
	return (
		<GluestackUIStyledProvider config={config}>
			<OverlayProvider>
				<ToastProvider>{children}</ToastProvider>
			</OverlayProvider>
		</GluestackUIStyledProvider>
	)
}

export default GluestackProvider

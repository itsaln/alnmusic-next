import React, { useRef } from 'react'
import { Props } from 'next/script'

interface FileUploadProps {
	setFile: Function
	accept: string
}

const FileUpload: React.FC<FileUploadProps & Props> = ({ setFile, accept, children }) => {
	const ref: any = useRef<HTMLInputElement>()

	const onChange = (e: React.ChangeEvent<HTMLInputElement> & any) => {
		setFile(e.target.files[0])
	}

	return (
		// <div onClick={() => ref.current.click()}>
		<div>
			<input
				type='file'
				accept={accept}
				// style={{ display: 'none' }}
				ref={ref}
				onChange={onChange}
			/>
			{children}
		</div>
	)
}

export default FileUpload

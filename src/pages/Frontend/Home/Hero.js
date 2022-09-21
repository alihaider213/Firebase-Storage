import React, { useState, useEffect } from 'react'
import filesize from "filesize"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage } from 'config/firebase'

export default function Hero() {

  const [file, setFile] = useState({})

  const [isUploading, setIsUploading] = useState(false)

  const [progress, setProgress] = useState(0)

  const [downloadURL, setDownloadURL] = useState("")

  // //  useEffect(() => {
  // //     console.log(filesize(1024))
  // //  }, [] )

  //   const handleFile = e => {
  //     let file = e.target.file[0]



  //     // if (file && file.size > 20000){
  //     //   alert("Your file size is greater then 20 KB")
  //     //   return
  //     // }

  //     setfile(file)
  //     // console.log(file)
  //   }

  const handleUpload = () => {

    if (!file?.size) {
      console.log("File isn't found")
      return
    }

    const fileExt = file.name.split(`.`).pop();
    // console.log(fileExt)

    const randomId = Math.random().toString(36).slice(2)
    console.log(randomId)

    const imagesRef = ref(storage, `images/${randomId}.${fileExt}`)
    const uploadTask = uploadBytesResumable(imagesRef, file);

    setIsUploading(true)
    setDownloadURL("")

    uploadTask.on("state_change",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log('Upload is ' + progress + '% done');

        setProgress(progress)

        //   if(progress == 100) {
        //   setTimeout(() => {
        //     setIsUploading(false)

        //   }, 1000);
        // }
      },
      (error) => {
        console.error(error)
        setIsUploading(false)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setDownloadURL(downloadURL)

          setTimeout(() => {
            setIsUploading(false)
          }, 1000);
        });
      }
    )


    // uploadBytes(imagesRef, file).then((snapshot) => {
    //     console.log('Uploaded a file!');
    // });



  }


  return (
    <div className='py-5'>
      <div className="container">

        <div className="row">
          <div className="col">
            <h1 className='text-center'>Upload Images</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type="file" className='form-control' accept='image/*' onChange={e => { setFile(e.target.files[0]) }} />
            {file.name && <p className="mb-0">File Name: {file.name} | Size: {filesize(file.size)}</p>}
            {/* {downloadURL && <p className="mb-0">URL : {downloadURL}</p>}   */}

          </div>
        </div>
        {isUploading
          ? <div className="row mt-3">
            <div className="col">
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: '${progress}%' }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}</div>
              </div>
            </div>
          </div>
          : ""
        }
        <div className="row my-3">
          <div className="col text-end">
            <button className='btn btn-success' onClick={handleUpload} disabled={isUploading}>
              {!isUploading
                ? "Upload"
                : <div className='spinner-border spinner-border-sm'></div>
              }
            </button>
          </div>
        </div>

        {downloadURL &&
          <div className="row">
            <div className="col text-center">
              <img src={downloadURL} alt="Islamic" className='img-fluid' />
              <a href={downloadURL} target="_blank" rel="noopener noreferrer" className='btn btn-success mb-3'>Download This Image</a>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Button, Modal } from 'flowbite-react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import { createLessonAPI } from '../../api/tutor'
import '@headlessui/react'

function createLessonModal({ course }) {
    const [isOpen, setIsOpen] = useState(false)

    const { handleSubmit, register, formState: { errors } } = useForm();
    const formData = new FormData();

    const onSubmit = (data) => {
        console.log(data);
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("lesson", Array.from(data.video)[0])
        formData.append("courseId",course._id)

        createLessonAPI(formData)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }


    return (
        <React.Fragment>
            <Button onClick={() => setIsOpen(!isOpen)} color="warning">
                Add New Lesson
            </Button>
            <Modal 
                dismissible={true}
                show={isOpen} 
                onClose={() => setIsOpen(!isOpen)}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header >
                        <span className='text-amber-500 nexa-font'>{course.title} - Add New Lesson</span>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Lesson No - {course.lessons.length + 1}</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    This information will be displayed publicly so be careful what you share.
                                </p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-full">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Title
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-">
                                                <input
                                                    type="text"
                                                    {...register('title')}
                                                    id="username"
                                                    autoComplete="username"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="lesson title"
                                                />
                                            </div>
                                            {errors.title && errors.title.message}
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                            Description
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                {...register('description')}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                defaultValue={''}
                                            />
                                        </div>
                                        <p className='text-red-600 nexa-font text-xs mt-2 ml-1'>{errors.description?.message}</p>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about this lesson.</p>
                                    </div>

                                    {/* <div className="col-span-full">
                                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                            Photo
                                        </label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <button
                                                type="button"
                                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                Change
                                            </button>
                                        </div>
                                    </div> */}

                                    <div className="col-span-full">
                                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                            Video File
                                        </label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                    >
                                                        <span>Upload a Video</span>

                                                        <input
                                                            id="file-upload"
                                                            name="file-upload"
                                                            type="file"
                                                            {...register('video')}
                                                            className="sr-only"
                                                        />

                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600">MP4, HEIC,MOV up to 30MB</p>
                                            </div>
                                            {errors.video && errors.video.message}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer className='flex justify-end'>
                        <Button type='submit' onClick={() => setIsOpen(!isOpen)}>
                            Create Lesson
                        </Button>
                        <Button
                            color="gray"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Go back
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </React.Fragment>
    )
}

export default createLessonModal
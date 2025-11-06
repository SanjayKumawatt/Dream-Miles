import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layouts/AppLayout'
import NotFound from './Components/NotFound'
import Home from './Pages/Home'
import DestinationPage from './Components/DestinationPage'
import BookingPage from './Components/BookingPage'
import TourPackagePage from './Components/TourPackagePage'
import AboutPage from './Pages/About'
import TourByDurationPage from './Pages/TourPackages'
import OneToThreeDayTours from './Pages/OneToThreeDayTours'
import FourToSevenDayTours from './Pages/FourToSevenDayTours'
import EightToFourteenDayTours from './Pages/EighttoFourteendays'
import FifteenPlusDayTours from './Pages/FifteenPlusDayTours'
import GoldenTriangleTourPage from './Pages/GoldenTriangleTourPage'
import RajasthanTourPage from './Pages/RajasthanTourPage'
import ContactPage from './Pages/ContactPage'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/destination/:slug",
          element: <DestinationPage />
        },
        {
          path: "/book-now/:slug",
          element: <BookingPage />
        },
        // Golden Triangle Packages se aane wale links
        {
          path: "/tour/:slug",
          element: <TourPackagePage />
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/tour-by-duration",
          element: <TourByDurationPage />
        },
        {
          path: "/tours/duration/1-3-days",
          element: <OneToThreeDayTours />
        },
        {
          path: "/tours/duration/4-7-days",
          element: <FourToSevenDayTours />
        },
        {
          path: "/tours/duration/8-14-days",
          element: <EightToFourteenDayTours />
        },
        {
          path: "/tours/duration/15-plus-days",
          element: <FifteenPlusDayTours />
        },
        {
          path: "/golden-triangle-tour",
          element: <GoldenTriangleTourPage />
        },
        {
          path: "/rajasthan-tour", // Header link ka path
          element: <RajasthanTourPage />
        },
        {
          path:"/contact",
          element:<ContactPage/>
        }
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
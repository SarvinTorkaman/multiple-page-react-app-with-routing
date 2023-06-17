import { useRouteLoaderData,json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
  // console.log(data)
  return (
    
      // {/* <h1>Event Detail Page</h1>
      // <p> {params.eventsID}</p> */}

      <EventItem event={data.event} />
    
  );
};

export default EventDetailPage;

export async function loader({request , params}) {
  const id = params.eventId;
  console.log(id);
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch details for the selected event.' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}


export async function action({request,params}){
  const eventId= params.eventId;

  const response= await fetch ('http://localhost:8080/events/'+eventId,{
    method:request.method,

  })

  if (!response.ok){
    throw json({message: 'Could not delete the event'}, {status:500})
  }

  return redirect('/events')
}
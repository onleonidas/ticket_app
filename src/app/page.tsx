import { EventCard } from "@/components/EventCard";
import { Title } from "@/components/Title";
import { EventModel } from "@/model";

export async function getEvents(): Promise<EventModel[]> {
  const response = await fetch('http://localhost:8080/events');

  // Verifique se a resposta é um JSON válido
  if (!response.ok) {
    console.error('Network response was not ok', response.statusText);
    throw new Error('Network response was not ok');
  }

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    console.error('Expected JSON but got:', contentType);
    throw new Error('Expected JSON but got: ' + contentType);
  }

  const data = await response.json();
  return data.events;
}

export default async function HomePage() {
  try {
    const events = await getEvents();
    console.log(events);
    return (
      <main className="mt-10 flex flex-col">
        <Title>Eventos disponíveis</Title>
        <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error('Failed to load events:', error);
    return (
      <main className="mt-10 flex flex-col">
        <Title>Erro ao carregar eventos</Title>
        <p>Não foi possível carregar os eventos disponíveis. Por favor, tente novamente mais tarde.</p>
      </main>
    );
  }
}

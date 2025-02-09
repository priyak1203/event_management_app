import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

function EventsCard({ title, description, venue, _id }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3>{description}</h3>
        <h3>{venue}</h3>
      </CardContent>
    </Card>
  );
}

export default EventsCard;

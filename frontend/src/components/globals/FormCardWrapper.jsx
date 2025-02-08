import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Logo from './Logo';

function FormCardWrapper({ title = 'Please fill details', children }) {
  return (
    <div className="min-h-screen flex items-center bg-neutral-100">
      <Card className="w-[500px] mx-auto  px-2 py-0 border-2">
        <CardHeader className="text-center">
          <CardTitle className="tracking-wide font-bold text-2xl text-primary">
            <div className="flex justify-center py-1 mb-1">
              <Logo />
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}

export default FormCardWrapper;

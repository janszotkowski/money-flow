import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowDownRight, Plus, LineChart, BarChart } from 'lucide-react';

export const Dashboard: React.FC = (): React.ReactElement => {
    return (
        <div className={'min-h-screen bg-black text-white p-8'}>
            <div className={'mb-8'}>
                <h1 className={'text-4xl font-light tracking-tight'}>Dashboard</h1>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'}>
                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-sm font-medium text-zinc-400'}>Celkové jmění</CardTitle>
                        <ArrowUpRight className={'h-4 w-4 text-green-500'} />
                    </CardHeader>
                    <CardContent>
                        <div className={'text-2xl font-bold'}>1 234 567 Kč</div>
                        <p className={'text-xs text-zinc-400'}>+12.5% oproti minulému měsíci</p>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-sm font-medium text-zinc-400'}>Bankovní účty</CardTitle>
                        <ArrowUpRight className={'h-4 w-4 text-green-500'} />
                    </CardHeader>
                    <CardContent>
                        <div className={'text-2xl font-bold'}>789 012 Kč</div>
                        <p className={'text-xs text-zinc-400'}>+5.2% oproti minulému měsíci</p>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-sm font-medium text-zinc-400'}>Investice</CardTitle>
                        <ArrowDownRight className={'h-4 w-4 text-red-500'} />
                    </CardHeader>
                    <CardContent>
                        <div className={'text-2xl font-bold'}>445 555 Kč</div>
                        <p className={'text-xs text-zinc-400'}>-2.1% oproti minulému měsíci</p>
                    </CardContent>
                </Card>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'}>
                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader>
                        <CardTitle className={'text-lg'}>Vývoj portfolia</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex gap-2 mb-4'}>
                            <Button variant={'outline'} size={'sm'}>1M</Button>
                            <Button variant={'outline'} size={'sm'}>3M</Button>
                            <Button variant={'outline'} size={'sm'}>1R</Button>
                        </div>
                        <div className={'h-[300px] bg-zinc-800 rounded-lg flex items-center justify-center'}>
                            <LineChart className={'h-8 w-8 text-zinc-400'} />
                        </div>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader>
                        <CardTitle className={'text-lg'}>Příjmy a výdaje</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex gap-2 mb-4'}>
                            <Button variant={'outline'} size={'sm'}>1M</Button>
                            <Button variant={'outline'} size={'sm'}>3M</Button>
                            <Button variant={'outline'} size={'sm'}>1R</Button>
                        </div>
                        <div className={'h-[300px] bg-zinc-800 rounded-lg flex items-center justify-center'}>
                            <BarChart className={'h-8 w-8 text-zinc-400'} />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
                <Button className={'h-24 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'}>
                    <Plus className={'h-6 w-6 mr-2'} />
                    Přidat transakci
                </Button>
                <Button className={'h-24 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'}>
                    <LineChart className={'h-6 w-6 mr-2'} />
                    Upravit investice
                </Button>
                <Button className={'h-24 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'}>
                    <BarChart className={'h-6 w-6 mr-2'} />
                    Analýza
                </Button>
            </div>
        </div>
    );
};

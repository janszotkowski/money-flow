import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bitcoin, Coins, LineChart, MoreHorizontal, Plus } from 'lucide-react';
import * as React from 'react';
import { useStore } from '@/hooks/useStore';
import { investmentStore } from '@/stores';
import { Investment } from '@/types/Investment';
import { Loading } from '@/components/ui/loading';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const InvestmentsComponent: React.FC = (): React.ReactElement => {
    const {
        items: investments,
        isLoading,
        error,
        fetchItems,
    } = useStore(investmentStore);

    useEffect(() => {
        console.log('Fetching investments data...');
        fetchItems().then(() => {
            console.log('Investments data fetched, items:', investmentStore.getItems());
        });
    }, [fetchItems]);

    if (isLoading) {
        return <Loading fullscreen text={'Načítání investic...'} />;
    }

    if (error) {
        return (<div className={'min-h-screen bg-black text-white p-8 flex items-center justify-center'}>Chyba: {error}</div>);
    }

    console.log('Rendering Investments component with items:', investments);

    return (
        <div className={'min-h-screen bg-black text-white p-8'}>
            <div className={'flex justify-between items-center mb-8'}>
                <h1 className={'text-4xl font-light tracking-tight'}>Investice</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className={'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'}>
                            <Plus className={'h-4 w-4 mr-2'} />
                            Přidat investici
                        </Button>
                    </DialogTrigger>
                    <DialogContent className={'bg-zinc-900 border-zinc-800'}>
                        <DialogHeader>
                            <DialogTitle>Přidat novou investici</DialogTitle>
                        </DialogHeader>
                        {/* Formulář pro přidání investice */}
                    </DialogContent>
                </Dialog>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'}>
                {(investments as Investment[]).slice(0, 3).map((investment) => {
                    // Určení ikony podle typu investice
                    let Icon = LineChart;
                    let iconColor = 'text-blue-500';
                    let bgColor = 'bg-blue-500/10';

                    if (investment.type === 'crypto') {
                        Icon = Bitcoin;
                        iconColor = 'text-orange-500';
                        bgColor = 'bg-orange-500/10';
                    } else if (investment.type === 'metals') {
                        Icon = Coins;
                        iconColor = 'text-yellow-500';
                        bgColor = 'bg-yellow-500/10';
                    }

                    return (
                        <Card key={investment.id} className={'bg-zinc-900 border-zinc-800'}>
                            <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                                <CardTitle className={'text-lg'}>{investment.name}</CardTitle>
                                <Button variant={'ghost'} size={'icon'}>
                                    <MoreHorizontal className={'h-4 w-4'} />
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <div className={'flex items-center gap-4 mb-4'}>
                                    <div className={`p-2 ${bgColor} rounded-lg`}>
                                        <Icon className={`h-6 w-6 ${iconColor}`} />
                                    </div>
                                    <div>
                                        <div className={'text-2xl font-bold'}>
                                            {investment.type === 'stocks' ? 'Akciové portfolio' :
                                                investment.type === 'crypto' ? 'Kryptoměny' :
                                                    investment.type === 'metals' ? 'Drahé kovy' : 'Ostatní'}
                                        </div>
                                        <div className={'text-sm text-zinc-400'}>{investment.platform}</div>
                                    </div>
                                </div>
                                <div className={'flex justify-between items-center'}>
                                    <div>
                                        <div className={'text-sm text-zinc-400'}>Hodnota</div>
                                        <div className={'text-xl font-bold'}>
                                            {investment.currentValue.toLocaleString('cs-CZ', {
                                                style: 'currency',
                                                currency: 'CZK',
                                            })}
                                        </div>
                                    </div>
                                    <div className={investment.profitLossPercentage >= 0 ? 'text-green-500' : 'text-red-500'}>
                                        {investment.profitLossPercentage >= 0 ? '+' : ''}{investment.profitLossPercentage.toFixed(1)}%
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'}>
                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader>
                        <CardTitle>Vývoj investic</CardTitle>
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
                        <CardTitle>Alokace portfolia</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'h-[300px] bg-zinc-800 rounded-lg flex items-center justify-center'}>
                            <div className={'text-zinc-400'}>Graf alokace</div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className={'bg-zinc-900 border-zinc-800'}>
                <CardHeader>
                    <CardTitle>Poslední transakce</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue={'all'} className={'w-full'}>
                        <TabsList className={'bg-zinc-800'}>
                            <TabsTrigger value={'all'}>Vše</TabsTrigger>
                            <TabsTrigger value={'buy'}>Nákupy</TabsTrigger>
                            <TabsTrigger value={'sell'}>Prodeje</TabsTrigger>
                        </TabsList>
                        <TabsContent value={'all'}>
                            <Table>
                                <TableHeader>
                                    <TableRow className={'border-zinc-800'}>
                                        <TableHead>Datum</TableHead>
                                        <TableHead>Typ</TableHead>
                                        <TableHead>Název</TableHead>
                                        <TableHead>Množství</TableHead>
                                        <TableHead className={'text-right'}>Částka</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow className={'border-zinc-800'}>
                                        <TableCell>1. 3. 2024</TableCell>
                                        <TableCell>Nákup</TableCell>
                                        <TableCell>Apple Inc.</TableCell>
                                        <TableCell>10 ks</TableCell>
                                        <TableCell className={'text-right text-red-500'}>-12 345 Kč</TableCell>
                                    </TableRow>
                                    <TableRow className={'border-zinc-800'}>
                                        <TableCell>28. 2. 2024</TableCell>
                                        <TableCell>Prodej</TableCell>
                                        <TableCell>Microsoft</TableCell>
                                        <TableCell>5 ks</TableCell>
                                        <TableCell className={'text-right text-green-500'}>+8 765 Kč</TableCell>
                                    </TableRow>
                                    <TableRow className={'border-zinc-800'}>
                                        <TableCell>27. 2. 2024</TableCell>
                                        <TableCell>Nákup</TableCell>
                                        <TableCell>Bitcoin</TableCell>
                                        <TableCell>0.1 BTC</TableCell>
                                        <TableCell className={'text-right text-red-500'}>-45 678 Kč</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
};

export const Investments = observer(InvestmentsComponent);
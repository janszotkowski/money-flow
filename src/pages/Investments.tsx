import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bitcoin, Coins, LineChart, MoreHorizontal, Plus } from 'lucide-react';
import * as React from 'react';

export const Investments: React.FC = (): React.ReactElement => {
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
                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-lg'}>XTB Portfolio</CardTitle>
                        <Button variant={'ghost'} size={'icon'}>
                            <MoreHorizontal className={'h-4 w-4'} />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex items-center gap-4 mb-4'}>
                            <div className={'p-2 bg-blue-500/10 rounded-lg'}>
                                <LineChart className={'h-6 w-6 text-blue-500'} />
                            </div>
                            <div>
                                <div className={'text-2xl font-bold'}>Akciové portfolio</div>
                                <div className={'text-sm text-zinc-400'}>XTB</div>
                            </div>
                        </div>
                        <div className={'flex justify-between items-center'}>
                            <div>
                                <div className={'text-sm text-zinc-400'}>Hodnota</div>
                                <div className={'text-xl font-bold'}>234 567 Kč</div>
                            </div>
                            <div className={'text-green-500'}>+12.5%</div>
                        </div>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-lg'}>Drahé kovy</CardTitle>
                        <Button variant={'ghost'} size={'icon'}>
                            <MoreHorizontal className={'h-4 w-4'} />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex items-center gap-4 mb-4'}>
                            <div className={'p-2 bg-yellow-500/10 rounded-lg'}>
                                <Coins className={'h-6 w-6 text-yellow-500'} />
                            </div>
                            <div>
                                <div className={'text-2xl font-bold'}>Zlato</div>
                                <div className={'text-sm text-zinc-400'}>Fyzické</div>
                            </div>
                        </div>
                        <div className={'flex justify-between items-center'}>
                            <div>
                                <div className={'text-sm text-zinc-400'}>Hodnota</div>
                                <div className={'text-xl font-bold'}>123 456 Kč</div>
                            </div>
                            <div className={'text-green-500'}>+5.2%</div>
                        </div>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-lg'}>Kryptoměny</CardTitle>
                        <Button variant={'ghost'} size={'icon'}>
                            <MoreHorizontal className={'h-4 w-4'} />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex items-center gap-4 mb-4'}>
                            <div className={'p-2 bg-orange-500/10 rounded-lg'}>
                                <Bitcoin className={'h-6 w-6 text-orange-500'} />
                            </div>
                            <div>
                                <div className={'text-2xl font-bold'}>Bitcoin</div>
                                <div className={'text-sm text-zinc-400'}>Binance</div>
                            </div>
                        </div>
                        <div className={'flex justify-between items-center'}>
                            <div>
                                <div className={'text-sm text-zinc-400'}>Hodnota</div>
                                <div className={'text-xl font-bold'}>89 012 Kč</div>
                            </div>
                            <div className={'text-red-500'}>-2.1%</div>
                        </div>
                    </CardContent>
                </Card>
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
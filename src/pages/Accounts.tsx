import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, ArrowUpRight, ArrowDownRight, MoreHorizontal, CreditCard, PiggyBank } from 'lucide-react';

export const Accounts: React.FC = (): React.ReactElement => {
    return (
        <div className={'min-h-screen bg-black text-white p-8'}>
            <div className={'flex justify-between items-center mb-8'}>
                <h1 className={'text-4xl font-light tracking-tight'}>Bankovní účty</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className={'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'}>
                            <Plus className={'h-4 w-4 mr-2'} />
                            Přidat účet
                        </Button>
                    </DialogTrigger>
                    <DialogContent className={'bg-zinc-900 border-zinc-800'}>
                        <DialogHeader>
                            <DialogTitle>Přidat nový účet</DialogTitle>
                        </DialogHeader>
                        {/* Formulář pro přidání účtu */}
                    </DialogContent>
                </Dialog>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'}>
                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-lg'}>Hlavní účet</CardTitle>
                        <Button variant={'ghost'} size={'icon'}>
                            <MoreHorizontal className={'h-4 w-4'} />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex items-center gap-4 mb-4'}>
                            <div className={'p-2 bg-blue-500/10 rounded-lg'}>
                                <CreditCard className={'h-6 w-6 text-blue-500'} />
                            </div>
                            <div>
                                <div className={'text-2xl font-bold'}>123 456 789</div>
                                <div className={'text-sm text-zinc-400'}>ČSOB</div>
                            </div>
                        </div>
                        <div className={'flex justify-between items-center'}>
                            <div>
                                <div className={'text-sm text-zinc-400'}>Dostupný zůstatek</div>
                                <div className={'text-xl font-bold'}>45 678 Kč</div>
                            </div>
                            <div className={'flex gap-2'}>
                                <Button variant={'outline'} size={'sm'}>
                                    <ArrowUpRight className={'h-4 w-4 mr-2'} />
                                    Příjem
                                </Button>
                                <Button variant={'outline'} size={'sm'}>
                                    <ArrowDownRight className={'h-4 w-4 mr-2'} />
                                    Výdaj
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-lg'}>Spořicí účet</CardTitle>
                        <Button variant={'ghost'} size={'icon'}>
                            <MoreHorizontal className={'h-4 w-4'} />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex items-center gap-4 mb-4'}>
                            <div className={'p-2 bg-green-500/10 rounded-lg'}>
                                <PiggyBank className={'h-6 w-6 text-green-500'} />
                            </div>
                            <div>
                                <div className={'text-2xl font-bold'}>987 654 321</div>
                                <div className={'text-sm text-zinc-400'}>Air Bank</div>
                            </div>
                        </div>
                        <div className={'flex justify-between items-center'}>
                            <div>
                                <div className={'text-sm text-zinc-400'}>Dostupný zůstatek</div>
                                <div className={'text-xl font-bold'}>123 456 Kč</div>
                            </div>
                            <div className={'flex gap-2'}>
                                <Button variant={'outline'} size={'sm'}>
                                    <ArrowUpRight className={'h-4 w-4 mr-2'} />
                                    Příjem
                                </Button>
                                <Button variant={'outline'} size={'sm'}>
                                    <ArrowDownRight className={'h-4 w-4 mr-2'} />
                                    Výdaj
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className={'bg-zinc-900 border-zinc-800'}>
                <CardHeader>
                    <CardTitle>Poslední transakce</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className={'border-zinc-800'}>
                                <TableHead>Datum</TableHead>
                                <TableHead>Popis</TableHead>
                                <TableHead>Kategorie</TableHead>
                                <TableHead>Účet</TableHead>
                                <TableHead className={'text-right'}>Částka</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className={'border-zinc-800'}>
                                <TableCell>1. 3. 2024</TableCell>
                                <TableCell>Platba za nákup</TableCell>
                                <TableCell>Potraviny</TableCell>
                                <TableCell>Hlavní účet</TableCell>
                                <TableCell className={'text-right text-red-500'}>-1 234 Kč</TableCell>
                            </TableRow>
                            <TableRow className={'border-zinc-800'}>
                                <TableCell>28. 2. 2024</TableCell>
                                <TableCell>Platba od zaměstnavatele</TableCell>
                                <TableCell>Příjem</TableCell>
                                <TableCell>Hlavní účet</TableCell>
                                <TableCell className={'text-right text-green-500'}>+45 678 Kč</TableCell>
                            </TableRow>
                            <TableRow className={'border-zinc-800'}>
                                <TableCell>27. 2. 2024</TableCell>
                                <TableCell>Převod na spořicí účet</TableCell>
                                <TableCell>Převod</TableCell>
                                <TableCell>Spořicí účet</TableCell>
                                <TableCell className={'text-right text-green-500'}>+5 000 Kč</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};
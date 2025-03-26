import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DateTimePicker } from '@/components/ui/date-time';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronLeft, ChevronRight, Filter, MoreHorizontal, Plus } from 'lucide-react';
import * as React from 'react';

export const Transactions: React.FC = (): React.ReactElement => {
    const [date, setDate] = React.useState<Date>();
    const [type, setType] = React.useState<string>('all');
    const [category, setCategory] = React.useState<string>('all');
    const [account, setAccount] = React.useState<string>('all');

    return (
        <div className={'min-h-screen bg-black text-white p-8'}>
            <div className={'flex justify-between items-center mb-8'}>
                <h1 className={'text-4xl font-light tracking-tight'}>Transakce</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className={'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'}>
                            <Plus className={'h-4 w-4 mr-2'} />
                            Přidat transakci
                        </Button>
                    </DialogTrigger>
                    <DialogContent className={'bg-zinc-900 border-zinc-800'}>
                        <DialogHeader>
                            <DialogTitle>Nová transakce</DialogTitle>
                        </DialogHeader>
                        <div className={'grid gap-4 py-4'}>
                            <div className={'grid grid-cols-4 items-center gap-4'}>
                                <label htmlFor={'type'} className={'text-right'}>
                                    Typ
                                </label>
                                <Select>
                                    <SelectTrigger className={'col-span-3'}>
                                        <SelectValue placeholder={'Vyberte typ'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={'income'}>Příjem</SelectItem>
                                        <SelectItem value={'expense'}>Výdaj</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className={'grid grid-cols-4 items-center gap-4'}>
                                <label htmlFor={'amount'} className={'text-right'}>
                                    Částka
                                </label>
                                <input
                                    id={'amount'}
                                    type={'number'}
                                    className={'col-span-3 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-50'}
                                    placeholder={'0.00'}
                                />
                            </div>
                            <div className={'grid grid-cols-4 items-center gap-4'}>
                                <label htmlFor={'description'} className={'text-right'}>
                                    Popis
                                </label>
                                <input
                                    id={'description'}
                                    type={'text'}
                                    className={'col-span-3 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-50 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-50'}
                                    placeholder={'Zadejte popis transakce'}
                                />
                            </div>
                            <div className={'grid grid-cols-4 items-center gap-4'}>
                                <label htmlFor={'date'} className={'text-right'}>
                                    Datum
                                </label>
                                <div className={'col-span-3'}>
                                    <DateTimePicker date={date} setDate={setDate} />
                                </div>
                            </div>
                            <div className={'grid grid-cols-4 items-center gap-4'}>
                                <label htmlFor={'category'} className={'text-right'}>
                                    Kategorie
                                </label>
                                <Select>
                                    <SelectTrigger className={'col-span-3'}>
                                        <SelectValue placeholder={'Vyberte kategorii'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={'salary'}>Plat</SelectItem>
                                        <SelectItem value={'food'}>Jídlo</SelectItem>
                                        <SelectItem value={'transport'}>Doprava</SelectItem>
                                        <SelectItem value={'entertainment'}>Zábava</SelectItem>
                                        <SelectItem value={'bills'}>Účty</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className={'grid grid-cols-4 items-center gap-4'}>
                                <label htmlFor={'account'} className={'text-right'}>
                                    Účet
                                </label>
                                <Select>
                                    <SelectTrigger className={'col-span-3'}>
                                        <SelectValue placeholder={'Vyberte účet'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={'main'}>Hlavní účet</SelectItem>
                                        <SelectItem value={'savings'}>Spořicí účet</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <Card className={'bg-zinc-900 border-zinc-800 mb-8'}>
                <CardContent className={'pt-6'}>
                    <div className={'grid grid-cols-1 md:grid-cols-4 gap-4'}>
                        <Select value={type} onValueChange={setType}>
                            <SelectTrigger className={'bg-zinc-800 border-zinc-700'}>
                                <SelectValue placeholder={'Typ transakce'} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={'all'}>Vše</SelectItem>
                                <SelectItem value={'income'}>Příjmy</SelectItem>
                                <SelectItem value={'expense'}>Výdaje</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className={'bg-zinc-800 border-zinc-700'}>
                                <SelectValue placeholder={'Kategorie'} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={'all'}>Vše</SelectItem>
                                <SelectItem value={'salary'}>Plat</SelectItem>
                                <SelectItem value={'food'}>Jídlo</SelectItem>
                                <SelectItem value={'transport'}>Doprava</SelectItem>
                                <SelectItem value={'entertainment'}>Zábava</SelectItem>
                                <SelectItem value={'bills'}>Účty</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={account} onValueChange={setAccount}>
                            <SelectTrigger className={'bg-zinc-800 border-zinc-700'}>
                                <SelectValue placeholder={'Účet'} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={'all'}>Vše</SelectItem>
                                <SelectItem value={'main'}>Hlavní účet</SelectItem>
                                <SelectItem value={'savings'}>Spořicí účet</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button variant={'outline'} size={'icon'}>
                            <Filter className={'h-4 w-4'} />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className={'bg-zinc-900 border-zinc-800'}>
                <CardContent className={'pt-6'}>
                    <Table>
                        <TableHeader>
                            <TableRow className={'border-zinc-800'}>
                                <TableHead>Datum</TableHead>
                                <TableHead>Popis</TableHead>
                                <TableHead>Kategorie</TableHead>
                                <TableHead>Účet</TableHead>
                                <TableHead className={'text-right'}>Částka</TableHead>
                                <TableHead className={'w-[50px]'}></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className={'border-zinc-800'}>
                                <TableCell>1. 3. 2024</TableCell>
                                <TableCell>Plat</TableCell>
                                <TableCell>Příjem</TableCell>
                                <TableCell>Hlavní účet</TableCell>
                                <TableCell className={'text-right text-green-500'}>+45 000 Kč</TableCell>
                                <TableCell>
                                    <Button variant={'ghost'} size={'icon'}>
                                        <MoreHorizontal className={'h-4 w-4'} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow className={'border-zinc-800'}>
                                <TableCell>1. 3. 2024</TableCell>
                                <TableCell>Nákup potravin</TableCell>
                                <TableCell>Jídlo</TableCell>
                                <TableCell>Hlavní účet</TableCell>
                                <TableCell className={'text-right text-red-500'}>-2 345 Kč</TableCell>
                                <TableCell>
                                    <Button variant={'ghost'} size={'icon'}>
                                        <MoreHorizontal className={'h-4 w-4'} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow className={'border-zinc-800'}>
                                <TableCell>28. 2. 2024</TableCell>
                                <TableCell>Převod na spoření</TableCell>
                                <TableCell>Převod</TableCell>
                                <TableCell>Spořicí účet</TableCell>
                                <TableCell className={'text-right text-blue-500'}>-10 000 Kč</TableCell>
                                <TableCell>
                                    <Button variant={'ghost'} size={'icon'}>
                                        <MoreHorizontal className={'h-4 w-4'} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <div className={'flex items-center justify-between mt-4'}>
                        <div className={'text-sm text-zinc-400'}>
                            Zobrazeno 1-10 z 50 transakcí
                        </div>
                        <div className={'flex gap-2'}>
                            <Button variant={'outline'} size={'icon'}>
                                <ChevronLeft className={'h-4 w-4'} />
                            </Button>
                            <Button variant={'outline'} size={'icon'}>
                                <ChevronRight className={'h-4 w-4'} />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
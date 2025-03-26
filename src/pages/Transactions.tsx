import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DateTimePicker } from '@/components/ui/date-time';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronLeft, ChevronRight, Filter, MoreHorizontal, Plus } from 'lucide-react';
import * as React from 'react';
import { useStore } from '@/hooks/useStore';
import { transactionStore } from '@/stores';
import { Transaction } from '@/types/Transaction';
import { Loading } from '@/components/ui/loading';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const TransactionsComponent: React.FC = (): React.ReactElement => {
    const [date, setDate] = React.useState<Date>();
    const [type, setType] = React.useState<string>('all');
    const [category, setCategory] = React.useState<string>('all');
    const [account, setAccount] = React.useState<string>('all');

    const {
        items: transactions,
        isLoading,
        error,
        fetchItems,
    } = useStore(transactionStore);

    useEffect(() => {
        console.log('Fetching transactions data...');
        fetchItems().then(() => {
            console.log('Transactions data fetched, items:', transactionStore.getItems());
        });
    }, [fetchItems]);

    if (isLoading) {
        return <Loading fullscreen text={'Načítání transakcí...'} />;
    }

    if (error) {
        return (<div className={'min-h-screen bg-black text-white p-8 flex items-center justify-center'}>Chyba: {error}</div>);
    }

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
                            {(transactions as Transaction[]).length > 0 ? (
                                (transactions as Transaction[]).map((transaction) => (
                                    <TableRow key={transaction.id} className={'border-zinc-800'}>
                                        <TableCell>{new Date(transaction.date).toLocaleDateString('cs-CZ')}</TableCell>
                                        <TableCell>{transaction.description}</TableCell>
                                        <TableCell>{transaction.category}</TableCell>
                                        <TableCell>{transaction.accountId}</TableCell>
                                        <TableCell className={`text-right ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                                            {transaction.type === 'income' ? '+' : '-'}
                                            {transaction.amount.toLocaleString('cs-CZ', {
                                                style: 'currency',
                                                currency: 'CZK',
                                            })}
                                        </TableCell>
                                        <TableCell>
                                            <Button variant={'ghost'} size={'icon'}>
                                                <MoreHorizontal className={'h-4 w-4'} />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className={'text-center py-4'}>Žádné transakce k zobrazení</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    <div className={'flex items-center justify-between mt-4'}>
                        <div className={'text-sm text-zinc-400'}>
                            Zobrazeno 1-{Math.min((transactions as Transaction[]).length, 10)} z {(transactions as Transaction[]).length} transakcí
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

export const Transactions = observer(TransactionsComponent);
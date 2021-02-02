

export default (req: Request, res: Response) => {
  res.status(200).json({ name: 'John Doe' })
}
